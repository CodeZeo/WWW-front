const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const {ApolloServer, gql} =require('apollo-server-express');
const {merge, update} = require('lodash');
const { GraphQLScalarType, Kind, resolveReadonlyArrayThunk } = require('graphql');


const Usuario = require('./models/usuario');
const Ejemplar = require('./models/ejemplar');
const Prestamo = require('./models/prestamo');
const Reserva = require('./models/reserva');
const Documento = require('./models/documento');
const Solicitud = require('./models/solicitud');
const documento = require('./models/documento');




mongoose.connect('mongodb+srv://AdminK:lppLxgQaUxBolFqc@cluster0.pnuncgf.mongodb.net/BibliotecaEC',{useNewUrlParser:true, useUnifiedTopology:true});

const dateScalar = new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar type',
    serialize(value) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    parseValue(value) {
      return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
      }
      return null; // Invalid hard-coded value (not an integer)
    },
  });


 
const typeDefs = gql`

scalar Date

type Usuario{
    id: ID!
    tipo: String
    rut: String
    huelladigital: String
    correo: String
    validado: Boolean
    nombres: String
    apellidos: String
    direccion: String
    telefono: String
    foto: String
    ban: Boolean
}

input UsuarioInput{
    tipo: String
    rut: String
    huelladigital: String
    correo: String
    validado: Boolean
    nombres: String
    apellidos: String
    direccion: String
    telefono: String
    foto: String
    ban: Boolean
}



type Prestamo{
    id: ID!
    usuario: Usuario
    ejemplar: Ejemplar
    adomicilio: Boolean
    fechaprestamo: Date
    tiempodevolucionindicado: Date
    tiempodevolucionefectivo: Date
    recordatorio: Date
    mora: Boolean
}

input PrestamoInput{
    usuario: String
    ejemplar: String
    adomicilio: Boolean
    fechaprestamo: Date
    tiempodevolucionindicado: Date
    tiempodevolucionefectivo: Date
    recordatorio: Date
    mora: Boolean
}

type Reserva{
    id: ID!
    ejemplar: Ejemplar
    fecha: Date
    usuario: Usuario
    estado: String
    prestamo: Prestamo
}

input ReservaInput{
    ejemplar: String
    fecha: Date
    usuario: String
    estado: String
    prestamo: String
}

type Documento{
    id: ID!
    titulo: String
    autor: String
    tipo: String
    editorial: String
    edicion: String
    anodeedicion: Int
    categoria: String
    ejemplares: [Ejemplar]
}

input DocumentoInput{
    titulo: String
    autor: String
    tipo: String
    editorial: String
    edicion: String
    anodeedicion: Int
    categoria: String
    ejemplares: [String]
}

type Ejemplar{
    id: ID!
    documento: Documento
    estado: String
    ubicacion: String
}

input EjemplarInput{
    documento: String
    estado: String
    ubicacion: String
}

type Solicitud{
    id: ID!
    ejemplar: Ejemplar
    fecha: String
    usuario: Usuario
    estado: String
    prestamo: Prestamo
}

input SolicitudInput{
    ejemplar: String
    fecha: String
    usuario: String
    estado: String
    prestamo: String
}

type Alert{
    message: String
}



type Query{
    readSolicitudes: [Solicitud]
    readUsuario(id: ID): Usuario
    readDocumento(id: ID): Documento
    readPrestamo(id: ID): Prestamo
    readEjemplar(id: ID): Ejemplar
    readSolicitud(id: ID): Solicitud
    readReserva(id: ID): Reserva

    autentificacion(rut: String, huelladigital: String):ID
}

type Mutation{
    insertUsuario(input: UsuarioInput): Usuario
    updateUsuario(id:ID!, input: UsuarioInput): Usuario
    deleteUsuario(id: ID!): Alert

    insertDocumento(input: DocumentoInput): Documento
    updateDocumento(id:ID!, input: DocumentoInput): Documento
    deleteDocumento(id: ID!): Alert

    insertPrestamo(input: PrestamoInput): Prestamo
    updatePrestamo(id:ID!, input: PrestamoInput): Prestamo
    deletePrestamo(id: ID!): Alert

    insertEjemplar(input: EjemplarInput): Ejemplar
    updateEjemplar(id:ID!, input: EjemplarInput): Ejemplar
    deleteEjemplar(id: ID!): Alert

    insertSolicitud(input: SolicitudInput): Solicitud
    updateSolicitud(id:ID!, input: SolicitudInput): Solicitud
    deleteSolicitud(id: ID!): Alert

    insertReserva(input: ReservaInput): Reserva
    updateReserva(id:ID!, input: ReservaInput): Reserva
    deleteReserva(id: ID!): Alert

  
    
}


`;

const resolvers = {
    Query: {
        async readSolicitudes(obj){
            const docs = await Solicitud.find().populate('ejemplar').populate('usuario').populate('prestamo');
            return docs;
        },
        async readUsuario(obj, {id}){
            const doc = await Usuario.findById(id);
            return doc;
        },
        async readDocumento(obj, {id}){
            const doc = await Documento.findById(id).populate('ejemplares');
            return doc;
        },
        async readPrestamo(obj, {id}){
            const prestamo = await Prestamo.findById(id).populate('usuario').populate('ejemplar');
            return prestamo;
        },
        async readEjemplar(obj, {id}){
            const ejemplar = await Ejemplar.findById(id).populate('documento');
            return ejemplar;
        },
        async readSolicitud(obj, {id}){
            const solicitud = await Solicitud.findById(id).populate('ejemplar').populate('usuario').populate('prestamo');
            return solicitud;
        },
        async readReserva(obj, {id}){
            const reserva = await Reserva.findById(id).populate('ejemplar').populate('usuario').populate('prestamo');
            return reserva;
        },

    },

    Mutation: {
        async insertUsuario(obj, { input }){
            const usuario = new Usuario(input);
            await usuario.save();
            return usuario;
        },
        async updateUsuario(obj, {id, input}){
            const usuario = await Usuario.findByIdAndUpdate(id, input);
            return usuario;
        },
        async deleteUsuario(obj, {id}){
            await Usuario.deleteOne({_id: id});
            return {message: "Usuario Eliminado"}
        },


        async insertDocumento(obj, { input }){
            const documento = new Documento(input);
            await documento.save();
            return documento;
        },
        async updateDocumento(obj, {id, input}){
            const documento = await Documento.findByIdAndUpdate(id, input);
            return documento;
        },
        async deleteDocumento(obj, {id}){
            await Documento.deleteOne({_id: id});
            return {message: "Documento Eliminado"}
        },
        

        async insertPrestamo(obj, { input }){
            const prestamo = new Prestamo(input);
            await prestamo.save();
            return prestamo;
        },
        async updatePrestamo(obj, {id, input}){
            const prestamo = await Prestamo.findByIdAndUpdate(id, input);
            return prestamo;
        },
        async deletePrestamo(obj, {id}){
            await Prestamo.deleteOne({_id: id});
            return {message: "Prestamo Eliminado"}
        },


        async insertEjemplar(obj, { input }){
            const ejemplar = new Ejemplar(input);
            await ejemplar.save();
            return ejemplar.populate('documento');
        },
        async updateEjemplar(obj, {id, input}){
            const ejemplar = await Ejemplar.findByIdAndUpdate(id, input);
            return ejemplar;
        },
        async deleteEjemplar(obj, {id}){
            await Ejemplar.deleteOne({_id: id});
            return {message: "Ejemplar Eliminado"}
        },


        async insertSolicitud(obj, { input }){
            const solicitud = new Solicitud(input);
            await solicitud.save();
            return solicitud;
        },
        async updateSolicitud(obj, {id, input}){
            const solicitud = await Solicitud.findByIdAndUpdate(id, input);
            return solicitud;
        },
        async deleteSolicitud(obj, {id}){
            await Solicitud.deleteOne({_id: id});
            return {message: "Solicitud Eliminada"}
        },
        

        async insertReserva(obj, { input }){
            const reserva = new Reserva(input);
            await reserva.save();
            return reserva;
        },
        async updateReserva(obj, {id, input}){
            const reserva = await Reserva.findByIdAndUpdate(id, input);
            return reserva;
        },
        async deleteReserva(obj, {id}){
            await Reserva.deleteOne({_id: id});
            return {message: "Reserva Eliminada"}
        },
    }
}

let apolloServer = null;
const corsOptions = {origin: 'http://localhost:8193', credentials:false};
async function startServer(){
    const apolloServer = new ApolloServer({typeDefs, resolvers, corsOptions});
    await apolloServer.start();
    apolloServer.applyMiddleware({app,cors:false});
}
startServer();
const app = express();
app.use(cors());
app.listen(8193,function(){console.log('Servidor iniciado');});
