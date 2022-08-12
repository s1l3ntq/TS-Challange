import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IUser } from '../model';
import { searchUserAction } from '../Redux/Actions';
import axios from 'axios';

const init: IUser = {
  name: '',
  repos: 0,
};

const SearchUser = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(init);

  const updateInput = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
        // const config = {
        //     method: 'get',
        //     url: `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students/${state.name}`,
        //     headers: { 
        //       'Authorization': 'Bearer keyGdNZBi7AFuiWKs', 
        //     }
        //   }; 
          
        // const {data} = await axios(config)5
        const config = {headers: { 
          'Authorization': 'Bearer keyGdNZBi7AFuiWKs', 
        } }
        const { data } = await axios.get(
          `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Students?fields=Name&fields=Classes`,
          config
        );
      
        interface mainStudentClasses {
          name: array
        }
        
        
        for (const record of data.records) {
          if (record.fields.Name.toLowerCase() == state.name.toLowerCase()) { 
            for(let x = 0; x < record.fields.Classes.length; x++) {
                mainStudentClasses[record.fields.Classes[x]] = record.fields.Name
              }
            mainStudentClasses.push(data.record.fields.Classes)
          }
        }

        
        let classes = [];
        for (let x = 0; x < list[0].fields.Classes.length; x++) {
          const classData = await axios.get(
            `https://api.airtable.com/v0/app8ZbcPx7dkpOnP0/Classes/${list[0].fields.Classes[x]}`,
            config
          ); 
          classes.push(classData)

        }
        console.log(classes, "test")


        console.log(list)
        // dispatch(searchUserAction({ ...state, repos: data.public_repos }));
        // setState(init);
    } catch (error) {
      console.log('error', error);
      alert('Fail to fetch this user');
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name"
            onChange={(e) => updateInput(e)}
            value={state.name}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default SearchUser;