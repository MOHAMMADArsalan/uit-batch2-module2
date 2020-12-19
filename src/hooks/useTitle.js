import { useEffect } from "react";

const useTitle = (title) => {

  useEffect(() => {
    document.title = title;
  }, [])
  
  return (newTitle) => {
    document.title = newTitle;
    console.log("called")
  };
}

export default useTitle;
