import os
from gino_admin import create_admin_app
from product.models import Category, Product
from users.models import User
from app import db, settings

current_path = os.path.dirname(os.path.abspath(__file__))

os.environ["SANIC_ADMIN_USER"] = "admin"
os.environ["SANIC_ADMIN_PASSWORD"] = "12345"

if __name__ == "__main__":
    # host & port - will be used to up on them admin app
    # that allow set path to presets folder or custom_hash_method, optional parameter
    # db_models - list of db.Models classes (tables) that you want to see in Admin Panel
    create_admin_app(
        host="127.0.0.1",
        port=os.getenv("PORT", 5000),
        db=db,
        db_models=[User, Category, Product],
        config={
            "presets_folder": os.path.join(current_path, "csv_to_upload"),
            "db_uri": settings.DATABASE_URI
        },
    )
