/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import SectionContainer from './SectionContainer';
import AddSectionRow from '../Forms/Proyects/AddSectionForm';
import { TaskListWrapper } from '../StyledComponents/TaskStyles';
import { projectActions } from '../../store/projects/project_slice';
import { changeSectionsOrder } from '../../store/projects/project_actions';

const SectionListContainer = ({ Sections }) => {
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }

    if (
      destination.dropableId === source.droppableId
      && destination.index === source.index
    ) {
      return;
    }
    const index = Sections.findIndex((task) => task.uuid === draggableId);
    const targetSection = Sections[index];

    const newSections = Array.from(Sections);
    newSections.splice(source.index, 1);
    newSections.splice(destination.index, 0, targetSection);

    dispatch(projectActions.updateSectionsOrder(newSections));

    dispatch(
      changeSectionsOrder({
        projectId: targetSection.proyectId,
        sectionId: targetSection.uuid,
        actualPosition: source.index,
        newPosition: destination.index,
      }),
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="all_sections" type="section">
        {(provided, { isDraggingOver }) => (
          <TaskListWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDragging={isDraggingOver}
          >
            {Sections.length > 0
              && Sections.map((section, index) => (
                <div key={section.uuid}>
                  <SectionContainer section={section} index={index} />
                  {!isDraggingOver ? (
                    <AddSectionRow projectId={section.proyectId} />
                  ) : (
                    <div style={{ height: '21px' }} />
                  )}
                </div>
              ))}
            {provided.placeholder}
          </TaskListWrapper>
        )}
      </Droppable>
    </DragDropContext>
  );
};

SectionListContainer.propTypes = {
  Sections: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SectionListContainer;
