

        var sum = 0
        for(var i = 0; i < 4000000000; i++)
        {
            if(i % 20000000 == 0){
                sum = sum + i;
                console.log("i = "+i+" iteration over ")
            }
        }
        self.postMessage(sum)
       
    
