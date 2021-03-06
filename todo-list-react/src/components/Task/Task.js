import React, { PureComponent } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import styles from './task.module.scss';

class Task extends PureComponent {
    state = {
        checked: false
    };

    toggleCheckbox = () => {
        this.setState({
            checked: !this.state.checked
        });

        this.props.onCheck();
    };

    toggleModal = ()=>{
        this.setState({
            showModal: !this.state.showModal
        });
    }

    render() {
        const { data, onRemove, onEdit, disabled } = this.props;
        const { checked } = this.state;

       const cardClasses = ['card', styles.task];
       if(checked){
        cardClasses.push(styles.checked);
       }

        return (
            <Card 
            className={cardClasses.join(' ')}
            >
            {/* className={`card ${styles.task} ${checked ? styles.checked : ''}`} */}
                <input
                    type='checkbox'
                    className={styles.checkbox}
                    onClick={this.toggleCheckbox}
                />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                      Description: {data.description}
                    </Card.Text>
                    <Card.Text>
                      Date: {data.date ? data.date.slice(0, 10) : 'none'}
                    </Card.Text>
                    <Button 
                    className = 'm-1'
                    variant="info"
                    onClick={onEdit}
                    disabled = {disabled}
                    >
                    <FontAwesomeIcon icon={faEdit} />
                    </Button>

                    <Button
                        className = 'm-1'
                        variant="danger"
                        onClick={onRemove(data._id)}
                        disabled = {disabled}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>

                </Card.Body>
            </Card>
        );
    }
}

export default Task;
