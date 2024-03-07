import { PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    

    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
              projectId='
              bf00969a-8fae-47fe-b57f-ae1764e6d7f1'
              username={props.user.username}
              secret={props.user.secret}
              style={{height: '100%'}}
            />
        </div>
    );
};

export default ChatsPage;
