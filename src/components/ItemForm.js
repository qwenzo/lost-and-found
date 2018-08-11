import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import { DropdownList,Multiselect} from 'react-widgets';
import Image from './Image';
import Button from './Button';
import axios from 'axios';
import Tag from './Tag';
import InputField from './InputField';
import TextareaField from './textareaField'

var  headers = {
    'Access-Control-Allow-Origin': '*',
    'Accept-Version': 1,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':' Origin, Content-Type, X-Auth-Token',
    'Authorization': `Bearer ${'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9teWxvc3Rmb3VuZC5oZXJva3VhcHAuY29tXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTMzODI0MDU3LCJleHAiOjE1MzM4Mjc2NTcsIm5iZiI6MTUzMzgyNDA1NywianRpIjoic1ZFalRXZ08zZlVCNDR6aSIsInN1YiI6MSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.sKbdWU7uKtp-u0rCzeqR0joRWEI2O7x6HF9fkA0HtX4'}` }
   

class ItemForm extends Component{
    state ={viewSecondList:false,images:[],renderImages:false,files:[],found:null , textCursorPos:0}

    componentDidMount(){
        var items = document.getElementById('tagsContainer');
        console.log(items.offsetWidth);
        console.log(items);
        var size =window.getComputedStyle(items).width;
        console.log(size);
        
        this.setState({textCursorPos:size+''});
       styles.test = {...styles.test,height:items.offsetHeight+'px'}
        var i=0;
        for(i=0; i <items.size;i++){
            console.log(items[i]);
        }
        console.log('test');
    }
    handleSubmitting(data){
        var items = document.getElementById('tagsContainer');
        console.log(items.offsetWidth);
       
      const req =  axios({ method: 'put', url: 'https://mylostfound.herokuapp.com/api/items/3',data:{name:'hjkhyuytytk',place:'jhkhjktytyuyj',description:'jghtyutujghj'}, headers }).then(
            (e) =>{
                console.log(e);
                console.log("lol");
            }
        ).catch((error)=>{
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
              }
        }).then(() =>{
            console.log(req)
        })
       // console.log(req);
        const Building = data.Building+'.'+data.BuildingFloor
        console.log({...data,Building:Building});
        console.log(this.state.images);
    }
    render(){
        const {handleSubmit} = this.props;
        const {containerStyle,imagesContainerStyle} =styles;
        return(
        <div className=" d-flex flex-column ">
              <style>{'body { background-color: #F8F9F9}'}</style>
            <div style={containerStyle} className="shadow-sm d-flex flex-column ">
            <form style={{backgroundColor:'#FFFF'}} onSubmit={handleSubmit(this.handleSubmitting.bind(this))} className="p-5">
            <div className="align-items-center d-flex flex-row justify-content-center">
                {/*  <Field 
                    name="lost"
                    component={renderChecker}
                    type="radio"
                    value="lost"
                    />{' '}  */}
                    <div className="shadow-sm p-2 m-1"
                        onClick = { (e)=>{
                            if(styles.lostCheckerStyle.backgroundColor===undefined){
                                styles.lostCheckerStyle={... styles.lostCheckerStyle,backgroundColor:'#ECF0F1'};
                                styles.foundCheckerStyle={... styles.foundCheckerStyle,backgroundColor:undefined};
                                e.target.className="p-2 m-1";
                                this.setState({found:true});

                            }
                            else{
                                styles.lostCheckerStyle={... styles.lostCheckerStyle,backgroundColor:undefined}; 
                                styles.foundCheckerStyle={... styles.foundCheckerStyle,backgroundColor:'#ECF0F1'};
                                this.setState({found:false});
                            }
                            
                        

                    }}
                        onMouseOver ={this.handleHover} 
                        onMouseLeave = {this.handleMouseLeaving}
                    style={styles.lostCheckerStyle} >I've lost an item</div>

                        <div  onClick = { (e)=>{
                            if(styles.foundCheckerStyle.backgroundColor===undefined){
                                styles.foundCheckerStyle={... styles.foundCheckerStyle,backgroundColor:'#ECF0F1'};
                                styles.lostCheckerStyle={... styles.lostCheckerStyle,backgroundColor:undefined};
                                this.setState({found:false});

                            }
                            else{
                                styles.foundCheckerStyle={... styles.foundCheckerStyle,backgroundColor:undefined}; 
                                styles.lostCheckerStyle={... styles.lostCheckerStyle,backgroundColor:'#ECF0F1'};
                                this.setState({found:true});
                            }
                    }}
                    onMouseOver ={this.handleHover} 
                    onMouseLeave = {this.handleMouseLeaving}
                 className="shadow-sm p-2 m-1" style={styles.foundCheckerStyle} >I want to register an item</div>
            </div>
            <label>
            <Button htmlFor='files' borderRadius='100'  className="d-flex align-self-end" img={<i class="fa fa-upload"></i>}/>
            <input id="files" type="file" name="user[image]" style={{visibility:'hidden'}}multiple="true" onChange={this.fileChangedHandler} />
         </label>
           
                {this.state.renderImages ? <div style={imagesContainerStyle} className=" p-1 shadow-sm  d-flex flex-row flex-wrap">
                {this.renderImages()}
                </div>:''}
            
                <div className="form-group " >
                    <Field  type="text" className="" label="Name" name="Name" component={renderInputField}/>
                </div>
                <div className="form-group " >
                    <Field type="text" className="" label="Tags" name="Tags" component={this.renderTags}/>
                </div>

                <div className="form-group " >
                    <Field type="text" className="" label="Description" name="desc" component={this.renderFieldtextArea}/>
                </div>

                <div className="d-flex flex-row">
                <Field className="col-sm" name="Building" onChange={this.onClickBuildingList.bind(this)} component={this.renderBuildingDropdownList.bind(this)} ></Field> 
                { this.state.viewSecondList ? <Field className="col-sm" name="BuildingFloor" component={this.renderFloorDropDownList} /> : ''} 
                    </div>
                   
                <button type="submit" className="btn btn-primary">Submit</button>
                <Button   className="d-flex align-self-start " text='test'/>
             </form>
             
            </div>
        </div>
        );
    }

    handleHover = (e) => {
      e.target.className+=' shadow-sm';
    }

    handleMouseLeaving = (e) => {
        //e.target.className-='shadow-sm';
        e.target.className = 'p-2 m-1'
    }

    handleDropImages = (files)=>{
        this.setState({
            images: files
        })
        console.log(files)
        this.setState({renderImages:true});
    }

    fileChangedHandler = (event) => {
        var files = event.target.files;
            for(var i=0; i<files.length;i++){
            const reader = new FileReader();
            reader.onloadend=  () => {
                this.setState({
                    images: [...this.state.images,reader.result]
                })
              }
              
            // console.log(this.state.images);
            reader.readAsDataURL(files[i]);

        }
        files =Array.from(FileList);
        //console.log(files);
        this.setState({files:files});
        this.setState({renderImages:true});
      }

    renderImages(){
       return (
           
        this.state.images.map(
            (data)=>{
              //  console.log(data);
                return <Image  key={data} className="m-1" height='200' width='200' source ={data}  />
            }
        ))
    }

    onClickBuildingList(){
        this.setState({viewSecondList:true});
    }

     renderChecker({input,label,meta:{touched,error,warn}}) {
        return (
            <a   ><div  onClick={this.stuff} className="shadow-sm p-2 m-1" style={styles.lostOrFound} {...input} >I've lost an item</div></a>
        );
    }

    renderTags ({ input, data, valueField, textField,label }) {
         data = ['blu','red','7rnksh'];
         const TagsComponent =({ item }) => (
            <span style={tagStyle}>
             {item}
            </span>
          );
          const tagStyle={
            backgroundColor:'red'
          }
       return(<div>
        <label>{label}</label>
        <Multiselect className="shadow-sm" {...input}
            onBlur={() => input.onBlur()}
            value={input.value || []} // requires value to be an array
            data={data}
            valueField={valueField}
            textField={textField}
        />
        </div>
        )
    }


     renderBuildingDropdownList ({ input, data, valueField, textField , meta:{touched,error,warn} }) {
        data = this.buildingData();
     return( <div><DropdownList   {...input}
     filter data={data}
        valueField={valueField}
        textField={textField}
        onChange={input.onChange} />
        {<span className="invalid-feedback">
         hiii
      </span>}
        </div> )
    };

    renderFloorDropDownList ({input,data, meta:{touched,error,warn} }) {
        data = ["000","100","200","300"];
     return(<div> <DropdownList   {...input}
     filter data={data}
        onChange={input.onChange} />
        {error && touched ?<span className="invalid-feedback">
         {error}
      </span> : ''}
      </div>
        )
    };


     numbToBuilding (numb){
        if(numb===1){
            return 'A';
        }
        else if(numb===2){
            return 'B'
        }
        else{
            return 'C'
        }
    }
    
     buildingData() {
       var data = [];
       var i =1;
       var maxi = 10;
      for(var j=1 ; j<=3 ; j++) {
        for( i=1;i<10;i++){
           data.push(this.numbToBuilding(j)+i);
        }
    }
    
    
        return data;
    }

    renderFieldtextArea = (
        {
          input,
          label,
          meta:{error,touched}  
        }
    ) =>{
     return(
         <div>
             <label style={styles.textLabelStyle}>{label}</label>
             <TextareaField input={input} isInvalidCond={touched && error}/>
             </div>
     )
    };
    
    

}




const renderInputField = ({input,label,meta:{touched,error,warn}}) =>{
       return <div > 
            <label>{label}</label>
            <div >
                <div className="d-flex flex-row" > 
             
           {/*  <input {...input} autoSave={'false'} autoComplete={'false'} type="text" style={styles.test} className={` w-100 p-1 shadow-sm  ${touched && error ? ' is-invalid':''}` }  placeholder={label}   /> */}
            <div id="tagsContainer" style={{zIndex:'1',position:'absolute',paddingRight:'0%'}} className="d-flex flex-wrap flex-row justify-content-center align-items-center  align-self-center">
                {/* <Tag text='test x'  className="p-2 justfy-content-center align-self-center mx-auto" />
                <Tag text='Food x'  className="p-2 justfy-content-center" />
                <Tag text='and x'  className="p-2 justfy-content-center" />
                <Tag text='Stuff x'  className="p-2 justfy-content-center align-self-center mx-auto" />
                <Tag text='loly x'  className="p-2 justfy-content-center" />
                <Tag text='lolly123 x'  className="p-2 justfy-content-center" />
                <Tag text='7rnksh x'  className="p-2 justfy-content-center align-self-center mx-auto" /> */}
                {/* <i id="tag" className="p-2 shadow-sm fa fa-search align-self-center"></i>
                <i id ="tag" className="p-2 shadow-sm fa fa-search align-self-center"></i> */}
                
            </div>
            
            </div>
          {/*   <div style={{zIndex:'1',position:'absolute'}} className='w-100 d-flex flex-stretch shadow-sm'>
                    lol
                </div> */}
                 <InputField input={input} placeholder='hey' isInvalidCond={touched && error}/> 
             <div className="d-flex flex-row" > 
           {/*  <input {...input} type="text" style={styles.test} className={`w-100 p-1 shadow-sm  ${touched && error ? ' is-invalid':''}` }  placeholder={label}   /> */}
           
            </div>
         
            </div>
        </div>
};



const renderChecker = ({input,label,meta:{touched,error,warn}}) =>{
    return (
        <a  href="#" ><div  onClick={this.stuff} className=" shadow-md p-2 m-1" style={styles.lostOrFound} {...input} >I've lost an item</div></a>
    );
}

const validate = (values) =>{
   const errors = {};
    if(!values.Building){
        errors.Building="Building is required";
    }
    if(!values.Name){
        errors.Name="Name is Required";
    }
    if(!values.desc){
        errors.desc="Description is Required";

    }
    return errors;
}

const styles={
    containerStyle:{
        border: '1px solid #ddd',
         marginLeft:'30%',
        marginRight:'30%',
        marginTop:'3%',
        marginBottom:'3%',
        borderRadius:'50px 50px 5px 5px',
        overflow:'hidden'
    },
    inputStyle:{
        flex:1
    },
    lostCheckerStyle:{
        border: '1px solid #eee',
        cursor:'pointer',
        userSelect: 'none'
    },
    foundCheckerStyle:{
        border: '1px solid #eee',
        cursor:'pointer',
        userSelect: 'none'
    },
    imagesContainerStyle:{
        border: '1px solid #eee',
        marginTop:'5%'
    },
    imageStyle:{
        cursor:'pointer'
    },
    test:{
        outline:'none',
        borderStyle:'none',
        border: '1px solid red',
        borderRadius:'5px 5px 5px 5px',
        paddingLeft:'5%',
        textIndent:'50px',
        //height:'660px'
       // backgroundColor:'#ECF0F1'
    },
    textLabelStyle:{
        font: '400px'
    }
    
}

 ItemForm = connect (null,null) (ItemForm)

export default reduxForm({form:'itemForm',
validate
})(ItemForm);