import React from "react";
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, updateNewMessageCreator} from "../../redux/messages-reducer";
import {Navigate} from "react-router";
import {Field, Form, Formik} from "formik";
import {Textarea} from "../common/FormsControls/FormsControls";
import MyButton from "../common/Button/MyButton";


const Dialogs = (props) => {



    let state = props.messagesPage;


    let messagesElements = state.messages.map(message => <Message
        message={message.message}
        key={message.id}
    />);

    let dialogsElements = state.dialogs.map(dialog => <DialogItem
        name={dialog.name}
        id={dialog.id}
        key={dialog.id}/>);



    if(!props.isAuth) return <Navigate to={"/login"}/>;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
               <div> {messagesElements}
                   <AddMassageForm sendMessage={props.sendMessage} /></div>
            </div>
        </div>
    )

}

const AddMassageForm = (props) => {


    let addNewMessage = (values) => {

        props.sendMessage( values );

    }

    return (
        <Formik
            initialValues={{
                newMessageBody: ""
            }}
            onSubmit={(values, {resetForm}) => {
                //( values.newMessageBody );
                props.sendMessage(values.newMessageBody);
                resetForm( {values: ''} );
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newMessageBody'}
                            as={Textarea}
                            placeholder={'enter text'}
                        />
                    </div>

                    <MyButton type={'submit'}>Send</MyButton>
                </Form>
            )}
        </Formik>
    )
}

export default Dialogs;