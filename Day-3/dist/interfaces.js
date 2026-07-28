class Document {
    doc;
    constructor(doc) {
        this.doc = doc;
    }
    print() {
        console.log(this.doc.name);
        console.log(this.doc.content);
    }
    getDisplayName() {
        return this.doc.name;
    }
    toJSON() {
        return JSON.stringify(this.doc);
    }
    fromJSON(data) {
        let res = JSON.parse(data);
        this.doc = res;
        return this;
    }
    validate() {
        if (this.doc.content === undefined ||
            Object.keys(this.doc.content).length === 0)
            return {
                id: this.doc.id,
                pass: false,
            };
        else
            return {
                id: this.doc.id,
                pass: true,
            };
    }
}
let obj = {
    id: 1,
    name: "first JSON",
    content: {},
};
let obj1 = {
    id: 1,
    name: "first JSON",
    content: { age: 10 },
};
let plainobj = {
    toJSON() {
        return JSON.stringify(obj);
    },
    fromJSON(data) {
        let res = JSON.parse(data);
        return this;
    },
};
let structuralType = plainobj;
let newDoc = new Document(obj);
console.log(newDoc.toJSON());
console.log(newDoc.validate());
console.log(newDoc.fromJSON(JSON.stringify(obj1)));
console.log(newDoc.validate());
export {};
