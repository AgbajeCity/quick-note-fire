# Flutter Notes App with Firebase

A Flutter notes application with Firebase authentication and Firestore integration, built using clean architecture and BLoC state management.

## 🚀 Features

- **Authentication**: Email/password signup and login
- **CRUD Operations**: Create, Read, Update, Delete notes
- **Real-time Sync**: Notes sync across devices using Firestore
- **Clean Architecture**: Separation of concerns with domain, data, and presentation layers
- **State Management**: BLoC pattern for predictable state management
- **Input Validation**: Comprehensive form validation with error handling

## 🏗️ Architecture

Clean Architecture with three layers:

```
lib/
├── core/                    # Shared utilities and constants
├── data/                    # External data sources & repositories
├── domain/                  # Business logic & entities
├── presentation/            # UI layer with BLoC state management
└── service_locator.dart     # Dependency injection
```

## 🔧 Setup Instructions

### Prerequisites
- Flutter SDK (>=3.0.0)
- Firebase project with Authentication and Firestore enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/flutter-notes-app.git
   cd flutter-notes-app
   ```

2. **Install dependencies**
   ```bash
   flutter pub get
   ```

3. **Firebase Setup**
   - Create Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password) and Firestore
   - Download and add configuration files:
     - `google-services.json` → `android/app/`
     - `GoogleService-Info.plist` → `ios/Runner/`

4. **Run the app**
   ```bash
   flutter run
   ```

## 🧪 Code Quality

Check code quality with Dart analyzer:
```bash
flutter analyze
```

## 📦 Key Dependencies

- `flutter_bloc: ^8.1.3` - State management
- `firebase_core: ^2.24.2` - Firebase core
- `firebase_auth: ^4.15.3` - Authentication
- `cloud_firestore: ^4.13.6` - Database
- `get_it: ^7.6.4` - Dependency injection

## 🔥 Firebase Structure

### Firestore Data Model
```
notes/
├── {noteId}/
│   ├── content: string
│   ├── createdAt: timestamp
│   ├── updatedAt: timestamp
│   └── userId: string
```

### Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /notes/{noteId} {
      allow read, write: if request.auth != null && 
                          request.auth.uid == resource.data.userId;
    }
  }
}
```

## 🎯 State Management

**BLoC Pattern Implementation:**
- **AuthBloc**: Manages authentication state and user sessions
- **NotesBloc**: Handles CRUD operations and notes state
- **Benefits**: Predictable state, separation of concerns, testable code

## 📱 Key Features

### Authentication Flow
- Sign up/Login with email validation
- Password strength validation
- Error handling with specific messages
- Session persistence

### CRUD Operations
- **Create**: Add notes via floating action button dialog
- **Read**: Display notes in Material Design cards
- **Update**: Edit notes with pre-filled dialog
- **Delete**: Remove notes with confirmation dialog

### User Experience
- Loading indicators during operations
- Success/error SnackBars
- Empty state with helpful hint
- Real-time Firebase synchronization

## 🛡️ Error Handling

- Network connectivity issues
- Firebase authentication errors
- Form validation errors
- User-friendly error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request
