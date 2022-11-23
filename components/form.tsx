import React from 'react'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const getUrl = process.env.NEXT_PUBLIC_GET_URL || '';
const postEndpoint = process.env.NEXT_PUBLIC_POST_ENDPOINT || '';

const Form = ()=> {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [random, setRandom] = React.useState('');
    const [randomField, setRandomField] = React.useState('');
    const [gender, setGender] = React.useState({
        "fieldName":"",
        "type":'',
        "value":'',
        "options":["male","female","other"]
    });
    const [age, setAge] = React.useState<number>();
    const [testimonial, setTestimonial] = React.useState(); 
    const [response, setResponse] = React.useState<string>();


    const getData = async() => {
        const data = await fetch(getUrl).then((res) => res.json())
        for(let i:any = 0; i<=data.data?.length-1; i++){
            if(data.data[i]?.fieldName==="firstName"){
                setFirstName(data.data[i]?.value)
            }
            if(data.data[i]?.fieldName==="lastName"){
                setLastName(data.data[i]?.value)
            }
            if(data.data[i]?.fieldName==="emailAddress"){
                setEmail(data.data[i]?.value)
            }
            if(data.data[i]?.fieldName==="gender"){
                setGender(data.data[i])
            }
            if(data.data[i]?.fieldName==="age"){
                setAge(data.data[i]?.value)
            }
            if(data.data[i]?.fieldName==="testimonial"){
                setTestimonial(data.data[i]?.value)
            }
            if(i===3){
                setRandom(data.data[i]?.value)
                setRandomField(data.data[i]?.fieldName)
            }
        }
        
    }

    React.useEffect(() => {
          getData();
    }, [])
    const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender({
            "fieldName":"",
            "type":'',
            "value":event.target.value,
            "options":["male","female","other"]
        });
      };
    
    const handleFirstName = (event:any) => {
        setFirstName(event.target.value);
    }

    const handleLastName = (event:any) => {
        setLastName(event.target.value);
    }
    const handleEmail = (event:any) => {
        setEmail(event.target.value);
    }
    const handleRandom = (event:any) => {
        setRandom(event.target.value);
    }
    const handleAge = (event:any) => {
        setAge(event.target.value);
    }
    const handleTestimonial = (event:any) => {
        setTestimonial(event.target.value);
    }

    const handleSubmit = async (event: any) => {
        // Stop the form from submitting and refreshing the page.
        event.preventDefault()
    
        // Cast the event target to an html form
        const form = event.target as HTMLFormElement
        
        // Get data from the form.
        const data = {
          firstName: form.firstname.value as string,
          lastName: form.lastname.value as string,
          emailAddress: form.email.value as string,
          [randomField] : form.random.value as string,
          [gender?.value?"gender":'']:gender?.value as string,
          [age!==undefined?"age":""]: form?.age?.value as number,
          [testimonial!==undefined?"testimonial":""]: form?.testimonial?.value as string,
        }
    
        // Send the form data to our API and get a response.
        const response = await fetch(postEndpoint, {
          // Body of the request is the JSON data we created above.
          body: JSON.stringify(data),
          // Tell the server we're sending JSON.
          headers: {
            'Content-Type': 'application/json',
          },
          // The method is POST because we are sending data.
          method: 'POST',
        })
    
        // Get the response data from server as JSON.
        // If server returns the name submitted, that means the form works.
        const result = await response.text()
        setResponse(result);
      }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                style={{marginTop:"1rem"}}
                id="firstname"
                label="First Name"
                variant="outlined"
                type="text"
                value={firstName}
                onChange = {handleFirstName}
                placeholder='firstName'
                fullWidth={true}
                />
                <TextField
                style={{marginTop:"1rem"}}
                id="lastname"
                label="Last Name"
                variant="outlined"
                type="text"
                value={lastName}
                onChange = {handleLastName}
                placeholder='lastName'
                fullWidth={true}
                />
                <TextField
                style={{marginTop:"1rem"}}
                id="email"
                label="Email Address"
                variant="outlined"
                type="email"
                value={email}
                onChange = {handleEmail}
                placeholder='Email Address'
                fullWidth={true}
                />
                <TextField
                style={{marginTop:"1rem"}}
                id="random"
                label={randomField}
                variant="outlined"
                type="text"
                value={random}
                onChange = {handleRandom}
                placeholder={randomField}
                fullWidth={true}
                />
                {gender?.value?
                    <TextField
                    style={{marginTop:"1rem"}}
                    id="gender"
                    label="Gender"
                    variant="outlined"
                    select
                    value={gender?.value}
                    onChange={handleGender}
                    placeholder='gender'
                    fullWidth={true}
                    >
                        {gender?.options.map((option) => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                :null}
                {age!==undefined?
                    <TextField
                    style={{marginTop:"1rem"}}
                    id="age"
                    label="Age"
                    variant="outlined"
                    type="number"
                    value={age}
                    onChange = {handleAge}
                    placeholder='age'
                    fullWidth={true}
                    />
                :null}
                {testimonial!==undefined?
                    <TextField
                    style={{marginTop:"1rem"}}
                    id="testimonial"
                    label="Testimonial"
                    variant="outlined"
                    type="text"
                    value={testimonial}
                    onChange = {handleTestimonial}
                    placeholder='testimonial'
                    fullWidth={true}
                    multiline
                    minRows={6}
                    />
                :null}
                <Box style={{display: "flex",marginTop: "16px",justifyContent: "center"}}>
                    <Button variant="contained" type='submit' color='primary'>Submit</Button>
                </Box>
            </form>
            {response?
                <Box style={{marginTop:"48px"}}>
                    <Typography variant="h6" paragraph>
                        Response
                    </Typography>
                    <code>
                        {response}
                    </code>
                </Box>
            :null}
        </div>
    )
}
export default Form;