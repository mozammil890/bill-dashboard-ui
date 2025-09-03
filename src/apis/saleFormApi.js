export async function submitApiFormData(formData){
    try{
        console.log("from api call code ", formData);
        const response =  await fetch('https://bill-dashboard-911b.onrender.com/v1/submit-sales',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(formData)
        });
        const contentType = response.headers.get('content-type');
        let data = null;
        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
          } else {
            data = null;
          }
        return data;
    }
    catch(error ){
        throw error;
    }
}