"use strict";(self["webpackChunkjobs"]=self["webpackChunkjobs"]||[]).push([[98],{1098:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var o=t(6768);function i(e,n,t,i,a,l){const r=(0,o.g2)("Edit");return(0,o.uX)(),(0,o.Wv)(r,{jobId:l.jobId},null,8,["jobId"])}var a=t(5130);const l={class:"form-group"},r=(0,o.Lk)("label",{for:"title"},"Title:",-1),s={class:"form-group"},p=(0,o.Lk)("label",{for:"description"},"Description:",-1),d={class:"form-group"},u=(0,o.Lk)("label",{for:"salary"},"Salary:",-1),c={class:"form-group"},m=(0,o.Lk)("label",{for:"yearsOfExperience"},"Years of Experience:",-1),b={class:"form-group"},w=(0,o.Lk)("label",{for:"company"},"Company:",-1),f={class:"form-group"},k=(0,o.Lk)("label",{for:"skills"},"Skills (comma-separated):",-1),y=(0,o.Lk)("button",{type:"submit"},"Submit",-1);function h(e,n,t,i,h,L){return(0,o.uX)(),(0,o.CE)("form",{id:"edit",onSubmit:n[6]||(n[6]=(0,a.D$)(((...e)=>L.handleSubmit&&L.handleSubmit(...e)),["prevent"]))},[(0,o.Lk)("div",l,[r,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"title",name:"title","onUpdate:modelValue":n[0]||(n[0]=e=>h.newTitle=e)},null,512),[[a.Jo,h.newTitle]])]),(0,o.Lk)("div",s,[p,(0,o.bo)((0,o.Lk)("textarea",{id:"description",name:"description","onUpdate:modelValue":n[1]||(n[1]=e=>h.newDescription=e)},null,512),[[a.Jo,h.newDescription]])]),(0,o.Lk)("div",d,[u,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"salary",name:"salary","onUpdate:modelValue":n[2]||(n[2]=e=>h.newSalary=e)},null,512),[[a.Jo,h.newSalary]])]),(0,o.Lk)("div",c,[m,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"yearsOfExperience",name:"yearsOfExperience","onUpdate:modelValue":n[3]||(n[3]=e=>h.newYearsOfExperience=e)},null,512),[[a.Jo,h.newYearsOfExperience]])]),(0,o.Lk)("div",b,[w,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"company",name:"company","onUpdate:modelValue":n[4]||(n[4]=e=>h.newCompany=e)},null,512),[[a.Jo,h.newCompany]])]),(0,o.Lk)("div",f,[k,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"skills",name:"skills","onUpdate:modelValue":n[5]||(n[5]=e=>h.newSkills=e)},null,512),[[a.Jo,h.newSkills]])]),y],32)}var L={name:"Edit",props:{jobId:Number},data(){return{newTitle:"",newDescription:"",newSalary:"",newYearsOfExperience:"",newCompany:"",newSkills:""}},methods:{handleSubmit(){let e={};""!==this.newTitle&&(e["title"]=this.newTitle),""!==this.newSalary&&(e["salary"]=parseInt(this.newSalary)),""!==this.newYearsOfExperience&&(e["yearsOfExperience"]=parseInt(this.newYearsOfExperience)),""!==this.newCompany&&(e["company"]=this.newCompany),""!==this.newDescription&&(e["description"]=this.newDescription),""!==this.newSkills&&(e["skills"]=this.newSkills.split(",").map((e=>e.trim())));let n=this.jobId;console.log(e),fetch(`http://localhost:3000/jobs/${n}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw new Error("Failed to update job");return e.json()})).then((e=>{console.log("Job updated successfully:",e)})).catch((e=>{console.error("Error updating job:",e)}))}}},S=t(1241);const E=(0,S.A)(L,[["render",h]]);var x=E,j={name:"EditJobView",components:{Edit:x},computed:{jobId(){return this.$route.params.jobId}}};const v=(0,S.A)(j,[["render",i]]);var g=v}}]);
//# sourceMappingURL=98.0b54744b.js.map