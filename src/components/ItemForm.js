import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';
import { DropdownList,Multiselect} from 'react-widgets';
import Image from './Image';

class ItemForm extends Component{
    state ={viewSecondList:false,images:[],renderImages:false,files:[],found:null}

    handleSubmitting(data){
        const Building = data.Building+'.'+data.BuildingFloor
        console.log({...data,Building:Building});
        console.log(this.state.images);
    }
    render(){
        const {handleSubmit} = this.props;
        const {containerStyle,imagesContainerStyle} =styles;
        return(
        <div className=" d-flex flex-column ">
            
            <div style={containerStyle} className="shadow-sm d-flex flex-column ">
            <form onSubmit={handleSubmit(this.handleSubmitting.bind(this))} className="p-5">
            <div className="align-items-center d-flex flex-row justify-content-center">
                {/*  <Field 
                    name="lost"
                    component={renderChecker}
                    type="radio"
                    value="lost"
                    />{' '}  */}
                    <div className=" p-2 m-1"
                        onClick = { (e)=>{
                            if(styles.lostCheckerStyle.backgroundColor===undefined){
                                styles.lostCheckerStyle={... styles.lostCheckerStyle,backgroundColor:'#ECF0F1'};
                                styles.foundCheckerStyle={... styles.foundCheckerStyle,backgroundColor:undefined};
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
                 className="p-2 m-1" style={styles.foundCheckerStyle} >I want to register an item</div>
            </div>
            <label>
            <input 
        type="file" 
        name="user[image]" 
        multiple="true" onChange={this.fileChangedHandler} />
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
        <Multiselect {...input}
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
             <label>{label}</label>
             <textarea className={`form-control ${touched && error ? ' is-invalid':''}` } {...input} />
             {touched &&
            ((error && <span className=" invalid-feedback">{error}</span>) )}
             </div>
     )
    };
    
    

}




const renderInputField = ({input,label,meta:{touched,error,warn}}) =>{
       return <div > 
            <label>{label}</label>
            <div >
            <input {...input} type="text"  className={`form-control ${touched && error ? ' is-invalid':''}` } placeholder={label}   />
            {error && touched ?<span className="invalid-feedback">
         {error}
      </span> : ''}
            </div>
        </div>
};



const renderChecker = ({input,label,meta:{touched,error,warn}}) =>{
    return (
        <a  href="#" ><div  onClick={this.stuff} className="shadow-sm p-2 m-1" style={styles.lostOrFound} {...input} >I've lost an item</div></a>
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
        border: '1px solid #eee',
        marginLeft:'25%',
        marginRight:'25%',
        marginTop:'3%'
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
    }
    
}

 ItemForm = connect (null,null) (ItemForm)

export default reduxForm({form:'itemForm',
validate
})(ItemForm);