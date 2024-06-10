const page=document.getElementById('list');
function addExpenses(){
    let mark=Date.now().toString();
    const cat=category.value;
    const des=description.value;
    const amo=amount.value;
    localStorage.setItem(`amo-${mark}`,amo);
    localStorage.setItem(`des-${mark}`,des);
    localStorage.setItem(`cat-${mark}`,cat);
   const li=document.createElement('li');
   
   li.innerHTML=`<span>${cat} ${amo}${des}</span><button type='button' onclick='deletebtn(this) class="'button"'>delete</button> <button type='button' onclick='editbtn(this)' class="'button">Edit</button>`;
   li.id=mark;
   page.appendChild(li);
    category.value='';
    description.value='';
    amount.value='';
}
function deletebtn(button){
   // console.log(button.parentNode.id)
   let idToDel=button.parentNode.id;
   page.removeChild(button.parentNode)
   remov(idToDel);
}
function remov(id){
    for(let i=0;i<localStorage.length;i++){
        let key1=localStorage.key(i);
         let keycom=key1.slice(4);
            if(keycom==id){
               localStorage.removeItem(key1);
               i--;
            }
        
    }
}
function editbtn(button){
    let idToEd=button.parentNode.id;
    let ref=[];
    for(let i=0;i<localStorage.length;i++){
        let key2=localStorage.key(i);
        console.log(key2)
         let keycom=key2.slice(4);
            if(keycom==idToEd){
             ref.push(key2);
            }
        
            }
            const cat=category.value;
            const des=description.value;
            const amo=amount.value;
        for(let i=0;i<ref.length;i++){
            if(ref[i][0]=='a'){
                localStorage.setItem(ref[i],amo);
           }
            if(ref[i][0]=='d'){
                localStorage.setItem(ref[i],des);
            }
            if(ref[i][0]=='c'){
                localStorage.setItem(ref[i],cat);
            }
        }
  const edlist=document.getElementById(idToEd);
  edlist.innerHTML=`<span>${cat} ${amo}${des}</span><button type='button' onclick='deletebtn(this)'>delete</button> <button type='button' onclick='editbtn(this)'>Edit</button>`;
  console.log(edlist);

}

