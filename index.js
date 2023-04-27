

import {React} from 'react'

export default function jj(){

return(
    <div>
        Hey jc
    </div>
)

}


export async function getServerSideProps(context) {
    var exec = require('child_process').exec;

    exec('start "" "C:/JCtest/testpdf.txt"', (error, stdout, stderr) => {
        if (error) {
          throw error;
        }
      });

    return {
      props: {}, // will be passed to the page component as props
    }
  }
