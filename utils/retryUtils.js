export class RetryUtils{
    static async retry(operation,retries=3){
        for(let i=0;i<retries;i++){
            try {
                return await operation
                
            } catch (error) {
                console.log(`Retry attemp ${1}=1`);
                
            if(I===retries-1){
                throw error
            }
                
            }
        }
    }
}