import EditTopicForm from "@/components/EditTopicForm";


const getTopicById =async()=>{
  try{
    const res=await fetch(`http://localhost/api/topics/${id},`,{
      cache:"no-store",
    })
    if(!res.ok){
      throw new Error("failed to fetch")
    }
    return res.json();

  }catch(error){

  }
}

export default async function EditTopic({params}){

  const id=params;
console.log("id :",id);
const {topic}= await getTopicById(id);
const {title,description}=topic;
    return(
      <EditTopicForm id={id} title={title} description={description}  />
    )
}