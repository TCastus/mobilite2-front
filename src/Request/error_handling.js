export class BadRequest extends Error {}
export class ErrorForbidden extends Error {}
export class ErrorLogin extends Error {}
export class ErrorNotFound extends Error {}
export class ErrorNotAllowed extends Error {}
export class ErrorProxyGateway extends Error {}
export class ErrorServerFail extends Error {}
export class Redirect extends Error {}

// CREDITS TO HOMEPAGE-SIA WEBSITE
// https://gitlab.com/sia-insa-lyon/dev/homepagesia/homepagesia-front

// Test Error matching
export const rematchError = (error) => (
    Promise.reject(error)
        .catch(error => Promise.reject(error.response && error.response.status === 300 ? new Redirect(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 400 ? new BadRequest(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 401 ? new ErrorLogin(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 403 ? new ErrorForbidden(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 404 ? new ErrorNotFound(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 405 ? new ErrorNotAllowed(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 500 ? new ErrorServerFail(error.response.data) : error))
        .catch(error => Promise.reject(error.response && error.response.status === 502 ? new ErrorProxyGateway(error.response.data) : error))
);

export const getDefaultErrorMessage = (err) => {
    switch (true) {
    case (err instanceof BadRequest):
        return "Une erreur est survenue";
    case (err instanceof ErrorForbidden):
        return "Vous n'avez pas l'accès à cette ressource";
    case (err instanceof ErrorNotFound):
        return "Cette ressource est introuvable";
    default:
        console.error(err);
        return "Une erreur est survenue";
    }
};
