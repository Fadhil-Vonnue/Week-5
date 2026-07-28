export {};
interface Serializable {
    toJSON(): string;
    fromJSON(data: string): this;
}
interface Printable {
    print(): void;
    getDisplayName(): string;
}
interface Validatable {
    validate(): ValidationResult;
}
interface ValidationResult {
    id: number;
    pass: boolean;
}
interface DocumentObject {
    id: number;
    name: string;
    content?: object;
}
class Document implements Serializable, Printable, Validatable {
    doc: DocumentObject;
    constructor(doc: DocumentObject) {
        this.doc = doc;
    }
    print(): void {
        console.log(this.doc.name);
        console.log(this.doc.content);
    }
    getDisplayName(): string {
        return this.doc.name;
    }
    toJSON(): string {
        return JSON.stringify(this.doc);
    }
    fromJSON(data: string): this {
        let res: DocumentObject = JSON.parse(data);
        this.doc = res;
        return this;
    }
    validate(): ValidationResult {
        if (
            this.doc.content === undefined ||
            Object.keys(this.doc.content).length === 0
        )
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
    name: "SECOND JSON",
    content: { age: 10 },
};
let plainobj = {
    toJSON(): string {
        return JSON.stringify(obj);
    },
    fromJSON(data: string) {
        let res: DocumentObject = JSON.parse(data);
        return this;
    },
};
let structuralType: Serializable = plainobj;

let newDoc = new Document(obj);
console.log(newDoc.toJSON());
console.log(newDoc.validate());
console.log(newDoc.fromJSON(JSON.stringify(obj1)));
console.log(newDoc.validate());
