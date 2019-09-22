const API_BASE = process.env.REACT_APP_API_BASE;

class APIRequest {
  async getProductsList() {
    let response = await fetch(API_BASE + "/product/list");

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body.content
    };
  }

  async getProduct(id) {
    let response = await fetch(API_BASE + "/product/" + id);

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body
    };
  }

  async addProduct(product) {
    let response = await fetch(API_BASE + "/product/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(product)
    });

    let body = {};
    try {
      body = await response.json();
    } catch (e) {}

    return {
      status: response.status,
      body: body
    };
  }
}

export const API = new APIRequest();