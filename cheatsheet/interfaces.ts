// interfaces
interface EntryInterface {
    id: string
    content: string
}

/*
 creating via object notation (with <> syntax)
*/
let diamondEntry = <EntryInterface>{
    id: "diamondEntry",
    content: "entry created from a diamond object syntax"
}

console.log(`USING <> SYNTAX : id=${diamondEntry.id} content=${diamondEntry.content}`);


/*
 creating via object notation (with type annotation syntax)
*/
let typeAnnotatedObject: EntryInterface = {
    id: "typeAnnotation",
    content: "entry created from a type annotation syntax"
}

console.log(`USING TYPE ANNOTATION SYNTAX : id=${diamondEntry.id} content=${diamondEntry.content}`);

