export const UPDATE_ROUTE = 'update_route';

export function updateRoute(route) {
  return {
    type: UPDATE_ROUTE,
    route
  }
}
