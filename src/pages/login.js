import Of from './api/of'
import Layout from './General/components/Layout'
import CriarLogin from './api/CriarLogin' 

export default function Index() {
    return (
      <>
<Layout pageName={"login"}>  
<div>
  <br/>
  <br/>
  <br/>
    
 <Of/>
      <CriarLogin/>
      </div>   
      </Layout>
     
      </>
    )
  }