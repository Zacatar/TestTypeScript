import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../Database/dbConn'; // Adjust the path as necessary

interface PacienteAttributes {
    idPaciente: number;
    nombre: string;
    apellido: string;
    edad: number;
    genero: string;
    telefono: string;
    direccion: string;
}

interface PacienteCreationAttributes extends Optional<PacienteAttributes, 'idPaciente'> {}

class Paciente extends Model<PacienteAttributes, PacienteCreationAttributes> implements PacienteAttributes {
    public genero: string;
    public telefono: string;
    public idPaciente!: number;
    public nombre!: string;
    public apellido!: string;
    public edad!: number;
    public direccion!: string;

    // timestamps!
    //public readonly createdAt!: Date;
    //public readonly updatedAt!: Date;
}

Paciente.init(
    {
        idPaciente: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        edad: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: 'pacientes',
        timestamps: false, // Disable timestamps
    }
);

export default Paciente;