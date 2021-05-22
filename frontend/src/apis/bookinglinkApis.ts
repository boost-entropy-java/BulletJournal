import {doFetch, doPatch, doPost} from "./api-helper";
import {RecurringSpan} from "../features/bookingLink/interface";

export const createBookingLink = (
    afterEventBuffer: number,
    beforeEventBuffer: number,
    endDate: string,
    expireOnBooking: boolean,
    includeTaskWithoutDuration: boolean,
    projectId: number,
    recurrences: RecurringSpan[],
    slotSpan: number,
    startDate: string,
    timezone: string
) => {
    const postBody = JSON.stringify({
        afterEventBuffer: afterEventBuffer,
        beforeEventBuffer: beforeEventBuffer,
        endDate: endDate,
        expireOnBooking: expireOnBooking,
        includeTaskWithoutDuration: includeTaskWithoutDuration,
        projectId: projectId,
        recurrences: recurrences,
        slotSpan: slotSpan,
        startDate: startDate,
        timezone: timezone
    });
    return doPost('/api/bookingLinks', postBody)
        .then(res => res.json())
        .catch(err => {
            throw Error(err.message);
        });
};

export const updateBookingLink = (
    bookingLinkId: string,
    timezone: string,
    afterEventBuffer?: number,
    beforeEventBuffer?: number,
    endDate?: string,
    expireOnBooking?: boolean,
    includeTaskWithoutDuration?: boolean,
    location?: string,
    projectId?: number,
    startDate?: string,
) => {
    const patchBody = JSON.stringify({
        afterEventBuffer: afterEventBuffer,
        beforeEventBuffer: beforeEventBuffer,
        endDate: endDate,
        expireOnBooking: expireOnBooking,
        includeTaskWithoutDuration: includeTaskWithoutDuration,
        projectId: projectId,
        startDate: startDate,
        timezone: timezone
    });
    return doPatch(`/api/bookingLinks/${bookingLinkId}`, patchBody)
        .then((res) => res.json())
        .catch((err) => {
            throw Error(err.message);
        });
}

export const getBookMeUsername = () => {
    return doFetch('/api/bookMeUsername')
        .catch(err => {
            throw Error(err.message);
        });
}

export const updateBookMeUsername = (name: string) => {
    return doPatch('/api/bookMeUsername', name)
        .catch((err) => {
            throw Error(err.message);
        });
}