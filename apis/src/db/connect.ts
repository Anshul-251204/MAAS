import mongoose from 'mongoose';

 const connectDB = async (mongoUri: string, dbName: string) => {
    try {
        mongoose.set('strictQuery', true); // optional, avoids warnings

        await mongoose.connect(mongoUri, {
            dbName: dbName,
            retryWrites: true,
            w: 'majority',
        });
        console.log()
        console.log(`🫙  MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error: any) {
        console.error(`❌ MongoDB connection failed: ${error.message}`);
        process.exit(1);
    }

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('🔌 MongoDB connection closed on app termination');
        process.exit(0);
    });
};

export default connectDB;