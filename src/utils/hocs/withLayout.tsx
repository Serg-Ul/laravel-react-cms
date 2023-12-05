import { ComponentType, ElementType } from 'react';

type TComponentProps = object;

const withLayout = (Component: ComponentType, Layout: ElementType) => (props: TComponentProps) =>
  (
    <Layout>
      <Component {...props} />
    </Layout>
  );

export default withLayout;
