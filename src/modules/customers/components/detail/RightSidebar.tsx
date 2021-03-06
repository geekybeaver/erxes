import { __ } from 'modules/common/utils';
import { CompanyAssociate } from 'modules/companies/containers';
import { List } from 'modules/companies/styles';
import { ICustomer } from 'modules/customers/types';
import { PortableDeals } from 'modules/deals/containers';
import { Sidebar } from 'modules/layout/components';
import * as React from 'react';

export default class RightSidebar extends React.Component<{
  customer: ICustomer;
}> {
  renderOther() {
    const { Section } = Sidebar;
    const { Title } = Section;

    const { customer } = this.props;

    const { integration, visitorContactInfo } = customer;

    return (
      <Section>
        <Title>{__('Other')}</Title>

        <List>
          {integration &&
            integration.name && (
              <li>
                <div>{__('Integration')}:</div>
                <span>{integration.name}</span>
              </li>
            )}
          {visitorContactInfo && (
            <li>
              <div>{__('Visitor contact info')}:</div>
              <span>
                {visitorContactInfo.email || visitorContactInfo.phone}
              </span>
            </li>
          )}
        </List>
      </Section>
    );
  }

  render() {
    const { customer } = this.props;

    return (
      <Sidebar>
        <CompanyAssociate data={customer} />
        <PortableDeals customerId={customer._id} />
        {this.renderOther()}
      </Sidebar>
    );
  }
}
