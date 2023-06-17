import { ComponentType, ElementType, ReactPropTypes } from 'react';

const withLayout =
  (Component: ComponentType<ReactPropTypes>, Layout: ElementType) => (props: ReactPropTypes) =>
    (
      <Layout>
        <Component {...props} />
      </Layout>
    );

export default withLayout;
