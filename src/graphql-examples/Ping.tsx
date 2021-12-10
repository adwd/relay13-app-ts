import { ReactElement } from 'react';
import { useLazyLoadQuery } from 'react-relay';
import graphql from 'babel-plugin-relay/macro';

import { PingQuery } from './__generated__/PingQuery.graphql';

export function Ping(): ReactElement {
  const data = useLazyLoadQuery<PingQuery>(
    graphql`
      query PingQuery {
        ping
      }
    `,
    {}
  );

  return <div>{JSON.stringify(data, null, 2)}</div>;
}
