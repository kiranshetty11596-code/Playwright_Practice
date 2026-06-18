const {defineConfig}=require('@playwright/test')

module.exports=defineConfig({
    testDir:'./tests',
    retries:0,
  
    use:{
        headless:false,
        baseURL:'https://www/saucedemo.com',
        viewport:null,
        launchOptions:{args:['--start-maximized']}
        
    },
    projects:[
        {
            name:'chromium',
            use:{browserName:'chromium'}
        },
        {
           name:'firefox',
           use:{browserName:'firefox'}  
        },
    ],
    
})