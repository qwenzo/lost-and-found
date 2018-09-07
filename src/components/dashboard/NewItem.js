import React , {Component} from 'react';
import './newitem.style.css'
import Image from '../Image';
import Carousel from '../Carousel';
import Tag from '../Tag';
import Button from '../common/button/Button';

class NewItem extends Component{
    state={view:true,collapse:false}
    render(){
        return(
            this.state.view ?<div className={`d-flex flex-column itemContainer ${this.state.collapse?'collapseItem':''}`}>
                
                <div className="d-flex flex-row">
                    <Carousel className="h-100 carouselStyle"  width={250} >
                        <Image width="250px"
                        className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                            alt="Trulli" />
                        
                        <Image width="250px"
                        className="" source="http://comparecamp.com/media/uploads/2014/09/asus-1024x682.jpg"
                            alt="Trulli"  />
                        
                    </Carousel>
                    <div className="d-flex flex-column">
                    <div className="p-2 detailsContainer d-flex "> 
                        <div className="m-1 d-flex flex-column">
                            <span className="detailsTitle">NAME</span>
                            <span className="name">LENOVO </span>
                        </div>
                        <div className="m-1 d-flex flex-column">
                            <span className="detailsTitle">LAST SEEN AT</span>
                            <span className="name">B1 </span>
                        </div>
                    </div>
                    <div className="TagsContainer">
                        <span className="detailsTitle">TAGS</span>
                        <div className="d-flex flex-wrap flex-row">
                            <Tag deletable = {true} text="test1" />
                            <Tag deletable = {true} text="test1" />
                            <Tag deletable = {true} text="test1" />
                            <Tag deletable = {true} text="test1" />
                            <Tag deletable = {true} text="test1" />
                            <Tag deletable = {true} text="test1" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="p-3 m-2 d-flex flex-row">
                    <div className=" d-flex flex-column p-2 descriptionContainer">
                        <span className="m-1 d-flex align-self-center justify-content-center descriptionTitle">DESCRIPTION</span>
                        Miusov, as a man man of breeding and deilcacy, could not but feel some inwrd qualms, when he reached the Father Superior's with Ivan: he felt ashamed of havin lost his temper. He felt that he ought to have disdaimed that despicable wretch, Fyodor Pavlovitch, too much to have been upset by him in Father Zossima's cell, and so to have forgotten himself. "Teh monks were not to blame, in any case," he reflceted, on the steps. "And if they're decent people here (and the Father Superior, I understand, is a nobleman) why not be friendly and courteous withthem? I won't argue, I'll fall in with everything, I'll win them by politness, and show them that I've nothing to do with that Aesop, thta buffoon, that Pierrot, and have merely been takken in over this affair, just as they have."
                        
                    </div>
                    <div className=" p-2 d-flex flex-column userInfo">
                    <span className="userInfoTitle">USER INFO</span>
                    <span className="detailsTitle">EMAIL</span>
                            <span className="name">ahmed.youssef@student.guc.edu.eg </span>
                    <span className="detailsTitle">USERNAME</span>
                            <span className="name">ahmed youssef </span>
                    <span className="detailsTitle">Mobile</span>
                            <span className="name">+0123456789 </span>
                    </div>
                </div>
                <div className="d-flex flex-column">
                    <div className="align-self-end d-flex flex-row float-right">
                        <Button text="ACCEPT" />
                        <Button onClick={this.removeItem.bind(this)} clickable={true} text="REJECT" />
                    </div>
                </div>
            </div>:null
        )
    }

    removeItem(){
        this.setState({collapse:true});
        setTimeout(() => this.setState({view:false}),1000);
    }
}

export default NewItem;

