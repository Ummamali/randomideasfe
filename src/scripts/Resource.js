export class Resource {
  constructor(endpoint, component = null) {
    this.endpoint = endpoint;
    this.items = [];
  }

  async requestCreate(resourceObj) {
    const res = await fetch(this.endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resourceObj),
    });
    if (res.ok) {
      const resObj = await res.json();
      if (resObj.created) {
        this.items.push(resObj.createdItem);
      }
      return resObj.createdItem;
    } else {
      console.log("Create returned ", res.status, res.statusText);
    }
  }

  async requestAll(saveItems = true) {
    const res = await fetch(this.endpoint);
    if (res.ok) {
      const resObj = await res.json();
      if (saveItems) {
        this.items = this.items.concat(resObj);
      }
      return resObj;
    } else {
      console.log("Fetch all returned ", res.status, res.statusText);
    }
  }

  async requestOne(id) {
    const res = await fetch(this.endpoint + "/" + id);
    if (res.ok) {
      const resObj = await res.json();
      return resObj;
    } else {
      console.log("Fetch one returned ", res.status, res.statusText);
    }
  }

  async requestUpdate(id, diffObj) {
    const res = await fetch(this.endpoint + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(diffObj),
    });
    if (res.ok) {
      const resObj = await res.json();
      if (resObj.updated) {
        const idx = this.items.findIndex((x) => x.id === id);
        this.items[idx] = resObj.updatedItem;
      }
      return resObj.updatedItem;
    } else {
      console.log("Update returned ", res.status, res.statusText);
    }
  }

  async requestDelete(id) {
    const res = await fetch(this.endpoint + "/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const resObj = await res.json();
      if (resObj.deleted) {
        const idx = this.items.findIndex((x) => x.id === id);
        this.items.splice(idx, 1);
      }
      return resObj;
    } else {
      console.log("Delete returned ", res.status, res.statusText);
    }
  }
}
