import React, { useEffect } from 'react'

const useTitle = (title) => {

    useEffect(()=>{
       document.title = `${title} - codeBook`
    },[title])
  return  null;
}

export default useTitle