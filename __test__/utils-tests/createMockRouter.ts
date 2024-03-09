import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export function createMockRouter(
  router: Partial<AppRouterInstance>
): AppRouterInstance {
  return {
    back: jest.fn(),
    forward: jest.fn(),

    push: jest.fn(),
    prefetch: jest.fn(),
    refresh: jest.fn(),
    replace: jest.fn(),

    ...router,
  }
}
