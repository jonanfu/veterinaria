from .authentication import Authenticate, get_current_active_user, check_if_user_is_admin, oauth2_scheme

auth_service = Authenticate()

__all__ = ['auth_service', 'get_current_active_user', 'check_if_user_is_admin', 'oauth2_scheme']
