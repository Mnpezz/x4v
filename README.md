# 🧭 x4v — Nostr Helper Network Guide

Welcome to a decentralized way to trade skills, shelter, and time — without middlemen, fees, or apps you don't own. This is a lightweight HelpX/WorkAway/WWOOF/Craigslist-style system built entirely on **Nostr**, where trust is earned, not assigned.

---

## 🔧 What This Is

* A **peer-to-peer exchange network** using simple Nostr posts
* Anyone can offer help, host others, or both
* Built around the idea of **Value-for-Value**: trade what you can for what you need
* Works with *any Nostr client* (Amethyst, Damus, Iris, Snort, etc.)

---

## ✍️ How to Post — Two Main Types

### 1. Host Post *(Looking for Help)*

```
ISO: Gardening help (3–4 hrs/day)  
WHEN: July 20–27  
WHERE: Flagstaff, AZ  
OFFERING: Private room + meals (or zap sats)  
CONTACT: DM or reply here  
#x4v #offer #arizona
```

### 2. Helper Post *(Offering Services)*

```
SKILLS: Carpentry, basic plumbing, solar setup  
AVAILABILITY: August — Southeast USA  
LOOKING FOR: Room/food/zaps in exchange for work  
DMs open! #x4v #helper #traveloffer
```

> Tag your city, region, or skills. Add `#x4v` so clients can find your post.

---

## 📌 Responding to a Post (`$bid`)

```
$bid I can help with gardening! I'll be in Flagstaff that week and have tools.
```

Use `$bid` in your reply so clients can filter for it.

---

## ✅ How Reviews Work (`!confirm`)

After help is completed, **leave a review** as a reply to the original post to keep it visible and nested.

### Example Host Review (Reply to Helper Post)

```
#review @npub1abc helped us for a week — great attitude, showed up on time, and worked hard. Highly recommend. #x4v
```

### Helper Confirms

```
!confirm Thanks for the stay — loved the garden! Would help again.
```

**Reviews are only considered trusted if:**

* They are replies to the original post
* The reviewed person replies with `!confirm`

---

## 🪪 Optional: Proof of Help Badge

Users can mint a **Proof-of-Help badge** (non-transferable NFT or signed Nostr note) after a confirmed exchange. These badges:

* Can be displayed in your Nostr profile
* Signal trust and past helpfulness
* Are verifiable and portable across clients

> *Implementation details coming soon*

---

## 🌐 Search Tags You Can Use

| Tag             | Use For                       |
| --------------- | ----------------------------- |
| `#x4v`          | General value-for-value post  |
| `#offer`        | Host looking for help         |
| `#helper`       | Someone offering help         |
| `#exchange`     | Someone offering an exchange  |
| `#review`       | A post-review message         |
| `#confirmable`  | Reviews awaiting confirmation |
| `#traveloffer`  | Helpers moving through areas  |
| `#Austin`, etc. | Location-specific tagging     |

---

## 🌟 Best Practices

* Be specific about your **skills** or **needs**
* Always **reply directly** to the post you're reviewing
* Use `#x4v` so your post is visible to others
* Confirm interactions with `!confirm` to show trust
* Be honest, kind, and pay it forward — this is a trust-first space

---

## 🔗 Future Features

* **Zap-verified reviews** (only if payment is used)
* **Badge browser** (view people’s history and trust badges)
* **Client** to view offers, bids, and reviews in an organized way

---

**Want to help build this?** Or just want to offer a hand? Post your first note today using `#x4v`.
