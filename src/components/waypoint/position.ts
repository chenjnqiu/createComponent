export interface IWaypointBounds {
    waypointTop: number;
    waypointBottom: number;
    viewportTop: number;
    viewportBottom: number;
}

export const enum WaypointPosition {
    Above,
    Inside,
    Below,
    Invisible,
    Unknown,
}