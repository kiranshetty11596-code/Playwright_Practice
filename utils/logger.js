export class Logger{
    static info(message){
        console.log(`[info]:${message}`)   
    }
    static error(message){
        console.log(`[Error]:${message}`);
    }
}