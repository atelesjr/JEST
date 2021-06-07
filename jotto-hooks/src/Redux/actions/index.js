import axios from 'axios'

export const getSecretWord = async (setSecreatWord) => {
    
    const res = await axios.get('http://localhost:3030')
    setSecreatWord( res.data )
}