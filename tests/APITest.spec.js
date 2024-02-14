const{test,expect} = require('@playwright/test');

var userid;

test("Get User" , async ({request})=>{

const response = await request.get("https://reqres.in/api/users/2");
await expect(response.status()).toBe(200);
console.log(await response.json());
console.log(response.status());
})

test("Create User post", async ({request}) =>{

    const response = await request.post("https://reqres.in/api/users",
    {
        data:{"name":"Deepthy","job":"Automation Tester"},
        Headers:{"Accept":"application/json"}
    });

    console.log(response.status());
    await expect(response.status()).toBe(201);
    var res = await response.json();
    console.log(res);
    userid = res.id;  
})

test("Update User Put", async ({request}) =>{

        const response = await request.put("https://reqres.in/api/users/2"+userid,
        {
            data:{"name":"Deepthy","job":"Automation Tester Playwright"},
            Headers:{"Accept":"application/json"}
        });
    
        console.log(response.status());
        await expect(response.status()).toBe(200);  
        console.log(await response.json());
})

test.only("Delete user Delete", async ({request}) =>{ 
    const response =await request.delete("https://reqres.in/api/users/2" + userid);
    console.log(response.status());
    await expect(response.status()).toBe(204);
})