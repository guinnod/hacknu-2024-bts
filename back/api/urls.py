from django.urls import path
from django.urls import include

from api.views import TestAPIView


urlpatterns = [
    path('google/test', TestAPIView.as_view()),

    path('auth/', include('api.auth.urls')),
    path('program/', include('api.modules.program.urls')),
    path('bank/', include('api.modules.bank.urls')),
    path('bank-card-type/', include('api.modules.bank_card_type.urls')),
    path('category/', include('api.modules.category.urls')),
    path('cashback/', include('api.modules.cashback.urls')),
    path('cards/', include('api.modules.user_card.urls')),
]
