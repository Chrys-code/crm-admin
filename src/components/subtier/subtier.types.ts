export type Plan = {
    title: string,
    users: number,
    emailTemplates: string | number,
    emailCount: string | number,
    trackers: string | number,
    journeys: string | number,
    price: number
}

export interface SubtierProps {
    plan: Plan
}
export interface SubtierContainerStyleProps { }