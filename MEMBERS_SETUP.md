# Active Members Setup Guide

This guide explains how to add and manage the active members list.

## Adding Members

### 1. Update Members Data

Open `app/members/page.tsx` and update the `sampleMembers` array:

```typescript
const sampleMembers: Member[] = [
  {
    id: 1,
    name: 'John Doe',
    membershipType: 'Life',
    joinDate: '2021-01',
    role: 'President',
    active: true,
  },
  {
    id: 2,
    name: 'Jane Smith',
    membershipType: 'General',
    joinDate: '2023-06',
    role: undefined, // No specific role
    active: true,
  },
  // Add more members here
];
```

### 2. Member Properties

Each member should have:
- **id**: Unique number
- **name**: Full name
- **membershipType**: One of: 'General', 'Life', 'Founding', 'Honorary', 'Advisory Board'
- **joinDate**: Format `YYYY-MM` (e.g., '2024-01')
- **role** (optional): Their role if any (e.g., 'President', 'Treasurer')
- **active**: `true` or `false` (only active members are displayed)

### 3. Membership Types

The page automatically groups members by type and displays:
- **General Members**: Standard active members
- **Life Members**: Members who've maintained subscription for 3+ years
- **Founding Members**: Original founding members
- **Honorary Members**: Distinguished honorary members
- **Advisory Board**: Advisory board members

### 4. Statistics

The page automatically calculates and displays:
- Total active members
- Life members count
- Founding members count
- Honorary members count

## Features

- ✅ Automatic grouping by membership type
- ✅ Statistics dashboard
- ✅ Member cards with role and join date
- ✅ Active status filtering
- ✅ Responsive grid layout
- ✅ Call-to-action for new members

## Privacy Considerations

- Only include information members have consented to share publicly
- Consider asking members before adding their information
- Review privacy policy before publishing member lists

## Example Workflow

1. Collect member information (with consent)
2. Add member entries to `sampleMembers` array
3. Set appropriate membership type and join date
4. Set `active: true` for current members
5. Commit and push changes
6. Members will appear in the directory automatically
