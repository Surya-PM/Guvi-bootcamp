

//2.Create your own resume data in JSON format

let resume=[
    {firstName:"Surya",lastName:"PM"},
    {careerObjective:" To become a Full Stack Developer"},
    {contact:{
        mail_id:"suriyamurugesan1997@gmail.com",
        phone_no:9500592188
    }},
    {education:{
        branch:"B.E-Civil",
        institution:"Sona College Of Technology",
        percentage:78
}},
    {skills:{
        frontEnd:["html","css","JS"],
        backend:["MongoDB","Express.js","React.js","Node.js"],
        programmingLanguages:["python","javascript"],
        otherSkills:["AWS","RHCE","Networking"]
    }},
    {languagesKnown:["English","Japanese","Tamil"]}
];
 
for(let i of resume){
        console.log(i);
     }
 


//1.For the given JSON iterate over all for loops (for, for in, for of, forEach)

Iterating above resume:
 
for(let a=0;a<resume.length;a++){
    console.log(resume[a])
};
for(let b of resume){
        console.log(b);
     }
for(let c in resume){
    console.log(c,resume[c]);
};
resume.forEach(d =>console.log(d)
);
 


//3.difference between window, screen and document in javascript
http://eligeske.com/jquery/what-is-the-difference-between-document-and-window-objects-2/#sthash.CwLGOk9c.dpuf

