import React from 'react';
import { mount } from '@cypress/react';

import TableMultiSortModal from './TableMultiSortModal';

describe('TableMultiSortModal', () => {
  it('should allow drag and drop of sort order downward', () => {
    const callbacks = {
      onAddMultiSortColumn: cy.stub(),
      onRemoveMultiSortColumn: cy.stub(),
      onSaveMultiSortColumns: cy.stub(),
      onCancelMultiSortColumns: cy.stub(),
      onClearMultiSortColumns: cy.stub(),
    };
    mount(
      <TableMultiSortModal
        columns={[
          {
            id: 'string',
            name: 'String',
            isSortable: true,
          },
          {
            id: 'select',
            name: 'Select',
            isSortable: true,
          },
          {
            id: 'number',
            name: 'Number',
            isSortable: true,
          },
        ]}
        ordering={[
          {
            columnId: 'string',
            isHidden: false,
          },
          {
            columnId: 'select',
            isHidden: false,
          },
          {
            columnId: 'number',
            isHidden: false,
          },
        ]}
        actions={callbacks}
        sort={[
          {
            columnId: 'string',
            direction: 'ASC',
          },
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
        ]}
        showMultiSortModal
        testId="multi_sort_modal"
      />
    );

    // drag the number column from the 3rd position to above the string column in the 1st position
    cy.findByTestId(`drag-handle-number`)
      .drag(`[data-testid="drag-handle-string"]`)
      .should(() => {
        cy.findByLabelText('Sort by').find('option:selected').should('have.text', 'Number');
        cy.findAllByLabelText('Then by')
          .eq(0)
          .find('option:selected')
          .should('have.text', 'String');
        cy.findAllByLabelText('Then by')
          .eq(1)
          .find('option:selected')
          .should('have.text', 'Select');
      });

    cy.findByRole('button', { name: 'Sort' })
      .realClick()
      .should(() => {
        expect(callbacks.onSaveMultiSortColumns).to.have.been.calledWith([
          {
            columnId: 'number',
            direction: 'ASC',
          },
          {
            columnId: 'string',
            direction: 'ASC',
          },
          {
            columnId: 'select',
            direction: 'DESC',
          },
        ]);
      });
  });

  it('should allow drag and drop of sort order upward', () => {
    const callbacks = {
      onAddMultiSortColumn: cy.stub(),
      onRemoveMultiSortColumn: cy.stub(),
      onSaveMultiSortColumns: cy.stub(),
      onCancelMultiSortColumns: cy.stub(),
      onClearMultiSortColumns: cy.stub(),
    };
    mount(
      <TableMultiSortModal
        columns={[
          {
            id: 'string',
            name: 'String',
            isSortable: true,
          },
          {
            id: 'select',
            name: 'Select',
            isSortable: true,
          },
          {
            id: 'number',
            name: 'Number',
            isSortable: true,
          },
        ]}
        ordering={[
          {
            columnId: 'string',
            isHidden: false,
          },
          {
            columnId: 'select',
            isHidden: false,
          },
          {
            columnId: 'number',
            isHidden: false,
          },
        ]}
        actions={callbacks}
        sort={[
          {
            columnId: 'string',
            direction: 'ASC',
          },
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
        ]}
        showMultiSortModal
        testId="multi_sort_modal"
      />
    );

    // drag the string column from the 1st position to below the number column (3rd position)
    cy.findByTestId(`drag-handle-string`)
      .drag(`[data-testid="drag-handle-number"]`, { position: 'bottom' })
      .should(() => {
        cy.findByLabelText('Sort by').find('option:selected').should('have.text', 'Select');
        cy.findAllByLabelText('Then by')
          .eq(0)
          .find('option:selected')
          .should('have.text', 'Number');
        cy.findAllByLabelText('Then by')
          .eq(1)
          .find('option:selected')
          .should('have.text', 'String');
      });

    cy.findByRole('button', { name: 'Sort' })
      .realClick()
      .should(() => {
        expect(callbacks.onSaveMultiSortColumns).to.have.been.calledWith([
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
          {
            columnId: 'string',
            direction: 'ASC',
          },
        ]);
      });
  });

  it('should not change the order when dragging over same row', () => {
    const callbacks = {
      onAddMultiSortColumn: cy.stub(),
      onRemoveMultiSortColumn: cy.stub(),
      onSaveMultiSortColumns: cy.stub(),
      onCancelMultiSortColumns: cy.stub(),
      onClearMultiSortColumns: cy.stub(),
    };
    mount(
      <TableMultiSortModal
        columns={[
          {
            id: 'string',
            name: 'String',
            isSortable: true,
          },
          {
            id: 'select',
            name: 'Select',
            isSortable: true,
          },
          {
            id: 'number',
            name: 'Number',
            isSortable: true,
          },
        ]}
        ordering={[
          {
            columnId: 'string',
            isHidden: false,
          },
          {
            columnId: 'select',
            isHidden: false,
          },
          {
            columnId: 'number',
            isHidden: false,
          },
        ]}
        actions={callbacks}
        sort={[
          {
            columnId: 'string',
            direction: 'ASC',
          },
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
        ]}
        showMultiSortModal
        testId="multi_sort_modal"
      />
    );

    // drag the string column from the 1st position, but not past the second position
    // to confirm the re-order doesn't get triggered
    cy.findByTestId(`drag-handle-string`)
      .drag(`[data-testid="drag-handle-string"]`, { position: 'bottom' })
      .should(() => {
        cy.findByLabelText('Sort by').find('option:selected').should('have.text', 'String');
        cy.findAllByLabelText('Then by')
          .eq(0)
          .find('option:selected')
          .should('have.text', 'Select');
        cy.findAllByLabelText('Then by')
          .eq(1)
          .find('option:selected')
          .should('have.text', 'Number');
      });

    cy.findByRole('button', { name: 'Sort' })
      .realClick()
      .should(() => {
        expect(callbacks.onSaveMultiSortColumns).to.have.been.calledWith([
          {
            columnId: 'string',
            direction: 'ASC',
          },
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
        ]);
      });
  });

  it('should add new rows and drag them properly before choosing columnId', () => {
    const callbacks = {
      onAddMultiSortColumn: cy.stub(),
      onRemoveMultiSortColumn: cy.stub(),
      onSaveMultiSortColumns: cy.stub(),
      onCancelMultiSortColumns: cy.stub(),
      onClearMultiSortColumns: cy.stub(),
    };
    mount(
      <TableMultiSortModal
        columns={[
          {
            id: 'string',
            name: 'String',
            isSortable: true,
          },
          {
            id: 'select',
            name: 'Select',
            isSortable: true,
          },
          {
            id: 'number',
            name: 'Number',
            isSortable: true,
          },
        ]}
        ordering={[
          {
            columnId: 'string',
            isHidden: false,
          },
          {
            columnId: 'select',
            isHidden: false,
          },
          {
            columnId: 'number',
            isHidden: false,
          },
        ]}
        actions={callbacks}
        sort={[
          {
            columnId: 'string',
            direction: 'ASC',
          },
        ]}
        showMultiSortModal
        testId="multi_sort_modal"
      />
    );

    cy.findAllByLabelText('Add column').eq(0).click();
    cy.findAllByLabelText('Add column').eq(1).click();
    cy.findAllByLabelText('Sort order').eq(1).select('Descending');

    // drag the string column from the 1st position to below the number column (3rd position)
    cy.findByTestId(`drag-handle-string`)
      .drag(`[data-testid="drag-handle-number"]`, { position: 'bottom' })
      .should(() => {
        cy.findByLabelText('Sort by').find('option:selected').should('have.text', 'Select');
        cy.findAllByLabelText('Then by')
          .eq(0)
          .find('option:selected')
          .should('have.text', 'Number');
        cy.findAllByLabelText('Then by')
          .eq(1)
          .find('option:selected')
          .should('have.text', 'String');
      });

    cy.findByRole('button', { name: 'Sort' })
      .realClick()
      .should(() => {
        expect(callbacks.onSaveMultiSortColumns).to.have.been.calledWith([
          {
            columnId: 'select',
            direction: 'DESC',
          },
          {
            columnId: 'number',
            direction: 'ASC',
          },
          {
            columnId: 'string',
            direction: 'ASC',
          },
        ]);
      });
  });
});
