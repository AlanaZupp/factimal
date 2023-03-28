import { useMemo } from "react";
import { DecoratorFn } from "@storybook/react";
import { QueryClient, QueryClientProvider } from "react-query";

export type QueryClientConfig = ConstructorParameters<typeof QueryClient>[0];
export const defaultConfig: QueryClientConfig = {};

export const QueryClientStorybookDecorator: DecoratorFn = (
  storyFn,
  context
) => {
  const queryClient = useMemo(() => new QueryClient(defaultConfig), []);

  return (
    <QueryClientProvider client={queryClient}>
      {storyFn(context)}
    </QueryClientProvider>
  );
};
