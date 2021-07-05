/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { CardContainer } from '../StyledComponents/ContainerStyles';
import Section from './Section';
import TasksContainer from './TasksContainer';

const SectionContainer = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Draggable draggableId={section.uuid} index={index}>
      {(provided) => (
        <CardContainer
          borderRadius={6}
          background="#fdfdfd"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <Section
            name={section.name}
            showFn={setIsOpen}
            isOpen={isOpen}
            dragHandle={provided.dragHandleProps}
          />
          {isOpen && (
            <TasksContainer
              projectId={section.proyectId}
              Tasks={section.Tasks}
              sectionId={section.uuid}
            />
          )}
        </CardContainer>
      )}
    </Draggable>
  );
};

SectionContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  section: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  // isDraggingOver: PropTypes.bool.isRequired,
};

export default SectionContainer;
