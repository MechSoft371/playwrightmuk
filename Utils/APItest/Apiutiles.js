export class Apiutiles{

    constructor(apiContext,loginpayload)
    {
        this.apiContext = apiContext;
        this.loginpayload = loginpayload

    }

    async getToken(){
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: this.loginpayload
        })
    const loginResponseJson = await loginResponse.json();
    let token = loginResponseJson.token;
    return token;

    }

    async createorder(orderPayload){
        let response={}
        response.token= await this.getToken()
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
                {
                    data: orderPayload,
                    headers: {
                        'Authorization': response.token,
                        'Content-Type'  : 'application/json'
                    },
                })
            const orderJson = await orderResponse.json()
            console.log(orderJson)
            let orderId = orderJson.orders[0];
            //orderId = await orderResponseJson.orders[0];
            if (orderJson.hasOwnProperty("orders") && Array.isArray(orderJson.orders)) {
                const orderId = orderJson.orders[0];
                console.log("✅ Order ID:", orderId);
            } else {
                console.log("❌ 'orders' key not found in response");
            }

            response.orderId = orderId
            return response
    }



}